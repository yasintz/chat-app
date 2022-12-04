import React from 'react';

interface ChannelItemProps {
  item: { id: string; name: string; count?: number };
  onChange?: (id: string, name: string) => void;
}

const ChannelItem = ({ item, onChange }: ChannelItemProps) => {
  const [givenName, setGivenName] = React.useState(item.name);

  const onSubmit = React.useCallback(() => {
    if (onChange) {
      onChange(item.id, givenName);
    }
  }, [givenName, item, onChange]);

  return (
    <>
      <p>
        {item.name} / {item.count}
      </p>
      <input value={givenName} onChange={(e) => setGivenName(e.target.value)} />
      <button onClick={() => onSubmit()}>Update</button>
    </>
  );
};

const PureChannelItem = React.memo(ChannelItem);

export { PureChannelItem as ChannelItem };
