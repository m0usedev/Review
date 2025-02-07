type initialCheck = boolean;

type EventPayloadMapping = {
  "status:initialCheck": initialCheck;
};

interface Window {
  electronStatus: {
    initialCheck: () => Promise<initialCheck>;
  };
}
