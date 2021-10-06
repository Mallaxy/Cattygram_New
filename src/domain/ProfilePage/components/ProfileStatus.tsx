import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBlock } from '../ProfileInfo.style';

export const ProfileStatus = ({ status, changeStatusAsync }) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [newStatus, setStatus] = useState(status);

  const prevStatus = useRef(status);

  const handleBlur = () => {
    dispatch(changeStatusAsync(newStatus));
    setEditMode(false);
  };

  const handleChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    if (prevStatus !== status) setStatus(status);
  }, []);

  return (
    <StatusBlock>
      {editMode ? (
        <div>
          <input
            type='text'
            onBlur={handleBlur}
            onChange={handleChange}
            value={newStatus}
            autoFocus
          />
        </div>
      ) : (
        <div onDoubleClick={() => setEditMode(true)}>
          {status || 'No Status'}
        </div>
      )}
    </StatusBlock>
  );
};
