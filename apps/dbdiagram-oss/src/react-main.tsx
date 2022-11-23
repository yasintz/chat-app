import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import reactStore from './store/react';

const App = () => {
  const [components, setComponents] = useState<
    Array<{
      id: string;
      component: React.FC<any>;
      props: any;
      container: any;
    }>
  >([]);

  useEffect(() => {
    reactStore.subscribe(() => {
      setComponents(Object.values(reactStore.components as any));
    });
  }, []);

  return (
    <>
      {components.map(({ component: Comp, props, container, id }) => (
        <React.Fragment key={id}>{createPortal(<Comp {...props} />, container)}</React.Fragment>
      ))}
    </>
  );
};

createRoot(document.getElementById('react-app')).render((<App />) as any);
