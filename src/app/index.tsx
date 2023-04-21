import { notification } from "../shared/lib/notification";

export const App = () => {
  const sendHelloNotification = () => {
    notification("Hi, that's cat", {
      icon: "/cat.svg",
    });
  };

  return (
    <div>
      <button onClick={sendHelloNotification}>Get notification</button>
    </div>
  );
};
