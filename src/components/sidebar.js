import React from 'react';

import locations from '../locations';


const Sidebar = () => (
  <aside>
    <h2>
      Locations
    </h2>
    <nav>
      {/* Search */}
      <ul>
        {locations.map(location => (
          <li key={location.name}>
            {location.name}
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)


export default Sidebar;
