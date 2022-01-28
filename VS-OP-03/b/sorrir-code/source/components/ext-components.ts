import {
  AbstractState,
  AtomicComponent,
  createPort,
  PortDirection,
} from "@sorrir/framework";

export enum userPort {
  TO_COMPONENT = "TO_COMPONENT",
}

enum EventTypes {
  DUMMY = "DUMMY",
}

/*const mqttButtonTopic = "sorrir/button-pressed";
const mqttBarrierControllerName = "mqtt-button-receiver";
const mqttSignalTopic = "sorrir/signal-update";
const mqttSignalControllerName = "mqtt-signal-publisher";*/

function createEmptyComponent(
  name: string,
  port: userPort,
  direction: PortDirection
): AtomicComponent<EventTypes, userPort> {
  return {
    name: name,
    step: (state) => undefined,
    allSteps: (state) => [state],
    ports: [createPort(port, Object.values(EventTypes), direction)],
    tsType: "Component",
  };
}

export const userStartState: AbstractState<string, unknown, unknown> = {
  state: "userStartState",
  events: [],
  tsType: "State",
};

export const user = createEmptyComponent("user", userPort.TO_COMPONENT, "out");
