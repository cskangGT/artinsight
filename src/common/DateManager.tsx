import React from 'react';
import { View, Text } from 'react-native';

export const CurrentDate = () => {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  const formattedDate = `${month}/${day}`;

  return formattedDate
};
export const getCurrentMonthAbbreviation = () => {
    const currentDate = new Date();
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const currentMonth = months[currentDate.getMonth()];
  
    return currentMonth;
  };





