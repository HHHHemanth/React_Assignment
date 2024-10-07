// C:\Users\Hemanth S\Downloads\FE\appscrip-task-hemanth\app\components\Sidebar.js

import { useState } from 'react';

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>
        {isVisible ? 'Hide Filter' : 'Show Filter'}
      </button>
      
      {isVisible && (
        <div className="sidebar">
          <h3>IDEAL FOR</h3>
          <select>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="baby">Baby</option>
          </select>

          <h3>OCCASION</h3>
          <ul>
            <li>Casual</li>
            <li>Formal</li>
            <li>Sports</li>
            <li>Party</li>
            <li>Wedding</li>
          </ul>

          <h3>WORK</h3>
          <ul>
            <li>Office</li>
            <li>Remote</li>
            <li>Fieldwork</li>
          </ul>

          <h3>FABRIC</h3>
          <ul>
            <li>Cotton</li>
            <li>Polyester</li>
            <li>Silk</li>
            <li>Wool</li>
          </ul>

          <h3>SEGMENT</h3>
          <ul>
            <li>Men's Wear</li>
            <li>Women's Wear</li>
            <li>Kids' Wear</li>
            <li>Accessories</li>
          </ul>

          <h3>SUITABLE FOR</h3>
          <ul>
            <li>Daily Wear</li>
            <li>Outdoor Activities</li>
            <li>Gym</li>
            <li>Beach</li>
          </ul>

          <h3>RAW MATERIALS</h3>
          <ul>
            <li>Organic</li>
            <li>Recycled</li>
            <li>Synthetic</li>
          </ul>

          <h3>PATTERN</h3>
          <ul>
            <li>Solid</li>
            <li>Striped</li>
            <li>Checked</li>
            <li>Printed</li>
          </ul>
        </div>
      )}

      <style jsx>{`
        .sidebar {
          border: 1px solid #ccc;
          padding: 10px;
          margin-top: 10px;
          background-color: #f9f9f9;
        }

        h3 {
          margin: 10px 0;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          margin: 5px 0;
        }

        button {
          padding: 10px 15px;
          background-color: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
        }

        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
