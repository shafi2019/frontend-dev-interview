import React, { useState } from 'react';
import classes from './App.module.css';
import { mockDevices } from './devices';
import { RhombusDevice } from './devices';

function App() {
  const [devices, setDevices] = useState<RhombusDevice[]>(mockDevices);
  const [newDevice, setNewDevice] = useState({
    name: '',
    serialNumber: '',
    deviceType: '',
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewDevice((prev) => ({ ...prev, [name]: value }));
  };

  // Add new device
  const handleAddDevice = (e: React.FormEvent) => {
    e.preventDefault();
    const newDeviceData: RhombusDevice = {
      ...newDevice,
      id: Date.now().toString(), // Generate unique ID
    };
    setDevices((prev) => [...prev, newDeviceData]);
    setNewDevice({ name: '', serialNumber: '', deviceType: '' }); // Reset form
  };

  return (
    <div className={classes.main}>
      {/* Task 3: Register Device Form */}
      <form onSubmit={handleAddDevice} className={classes.form}>
        <input
          type="text"
          name="name"
          placeholder="Device Name"
          value={newDevice.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="serialNumber"
          placeholder="Serial Number"
          value={newDevice.serialNumber}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="deviceType"
          placeholder="Device Type"
          value={newDevice.deviceType}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Register Device</button>
      </form>

      {/* Task 2: Render device cards */}
      <div className={classes.cardContainer}>
        {devices.map((device) => (
          <div key={device.id} className={classes.card}>
            <h3>{device.name}</h3>
            <p>Serial Number: {device.serialNumber}</p>
            <p>Device Type: {device.deviceType}</p>
            {device.maxBitrate && <p>Max Bitrate: {device.maxBitrate}</p>}
            {device.hardwareType && <p>Hardware: {device.hardwareType}</p>}
            {device.disconnected && <p style={{ color: 'red' }}>Disconnected</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
