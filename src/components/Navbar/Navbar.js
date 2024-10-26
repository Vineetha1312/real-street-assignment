import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const NavBar = () => {
  const [menuItems, setMenuItems] = useState([
    { id: '1', name: 'Home', url: '/' },
    { id: '2', name: 'New Properties', url: '/new-properties' },
    { id: '3', name: 'About Us', url: '/about' },
    { id: '4', name: 'Contact Us', url: '/contact' },
  ]);

  const [newItem, setNewItem] = useState({ name: '', url: '' });
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);

  const handleOnDrag = (result) => {
    if (!result.destination) return;
    const items = Array.from(menuItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setMenuItems(items);
  };

  const validateNewItem = () => {
    const newErrors = {};
    const urlPattern = /^(https?:\/\/)/;

    if (newItem.name.length < 3) newErrors.name = 'Name must be at least 3 characters';
    if (!newItem.url) {
      newErrors.url = 'URL is required';
    } else if (!urlPattern.test(newItem.url)) {
      newErrors.url = 'URL must start with http:// or https://';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addMenuItem = () => {
    setTouched(true);
    if (validateNewItem()) {
      setMenuItems([...menuItems, { id: `${menuItems.length + 1}`, ...newItem }]);
      setShowModal(false);
      setNewItem({ name: '', url: '' });
      setErrors({});
    }
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4 flex items-center justify-between text-white md:flex-wrap">
        
        <DragDropContext onDragEnd={handleOnDrag}>
          <Droppable droppableId="menuItems" direction="horizontal">
            {(provided) => (
              <ul
                className="flex space-x-4 items-center flex-wrap md:justify-center"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {menuItems.map(({ id, name, url }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="cursor-move"
                      >
                        <a href={url} className="hover:text-blue-400 block text-sm md:text-base">
                          {name}
                        </a>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

       
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-lg ml-auto md:ml-0"
        >
          Add +
        </button>
      </nav>

      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold">Add New Menu Item</h3>
            <input
              type="text"
              placeholder="Menu Name"
              className="mt-2 p-2 border w-full"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            {touched && errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}

            <input
              type="text"
              placeholder="Menu URL"
              className="mt-2 p-2 border w-full"
              value={newItem.url}
              onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
            />
            {touched && errors.url && <div className="text-red-500 text-sm mt-1">{errors.url}</div>}

            <div className="mt-4 flex justify-end space-x-2">
              <button className="bg-green-500 text-white py-2 px-4 rounded-md" onClick={addMenuItem}>
                Add Menu
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
