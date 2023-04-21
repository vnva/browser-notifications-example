export async function notification(
  title: string,
  options?: NotificationOptions
): Promise<Notification> | never {
  if (!("Notification" in window)) {
    throw new Error("This browser does not support notifications");
  } else if (Notification.permission === "granted") {
    return new Notification(title, options);
  } else if (Notification.permission !== "denied") {
    try {
      await Notification.requestPermission();
      return new Notification(title, options);
    } catch {
      throw new Error("User denied notifications");
    }
  } else {
    throw new Error("User denied notifications");
  }
}
