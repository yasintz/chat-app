import { useEvent, useState, memo } from 'react';

interface ChannelItemProps {
  item: { id: string; name: string; count?: number };
  onChange?: (id: string, name: string) => void;
}

export const ChannelItem = memo(({ item, onChange }: ChannelItemProps) => {
  const [givenName, setGivenName] = useState(item.name);

  const onSubmit = useEvent(() => {
    if (onChange) {
      onChange(item.id, givenName);
    }
  });

  return (
    <>
      <p>
        {item.name} / {item.count}
      </p>
      <input value={givenName} onChange={(e) => setGivenName(e.target.value)} />
      <button onClick={() => onSubmit()}>Update</button>
    </>
  );
});
