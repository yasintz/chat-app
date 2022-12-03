import React from 'react';
import { ChannelItem } from './channel-item';

interface ChannelListProps {
  itemList?: Array<{ id: string; name: string; count?: number }>;
  onChange?: (id: string, name: string) => void;
}

export const ChannelList = ({ itemList, onChange }: ChannelListProps) => {
  const onItemChanged = React.useCallback(
    (id: string, name: string) => {
      if (onChange) {
        onChange(id, name);
      }
    },
    [onChange]
  );

  return (
    <ul>
      {itemList?.map((item) => (
        <li key={item.id}>
          <ChannelItem item={item} onChange={onItemChanged} />
        </li>
      ))}
    </ul>
  );
};
