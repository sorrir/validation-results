import {
  StateMachine,
  createStatemachineComponent,
  StateMachineState,
  AbstractState,
  AtomicComponent,
  createPort,
} from "@sorrir/framework";

enum States {
  IDLE = "IDLE",
}

enum EventTypes {
  DUMMY = "DUMMY",
}

export enum ComponentPorts {
  FROM_USER = "FROM_USER",
}

const sm: StateMachine<States, undefined, EventTypes, ComponentPorts> = {
  transitions: [
    {
      sourceState: States.IDLE,
      targetState: States.IDLE,
      event: ["oneway", EventTypes.DUMMY, ComponentPorts.FROM_USER],
      action: (myState, raiseEvent) => {
        raiseEvent({
          type: EventTypes.DUMMY,
        });
        return undefined;
      },
    },
  ],
};

export const componentStartState: StateMachineState<
  any,
  any,
  EventTypes,
  undefined
> = {
  state: { fsm: States.IDLE, my: undefined },
  events: [
    {
      type: EventTypes.DUMMY,
      rc: 42,
      eventClass: "error",
      error: "error msg",
      answerToRequestID: "test",
      layer: "ApplicationLayer",
      id: "test",
    },
  ],
  tsType: "State",
};

export const component: AtomicComponent<EventTypes, ComponentPorts> =
  createStatemachineComponent(
    [
      {
        name: ComponentPorts.FROM_USER,
        eventTypes: Object.values(EventTypes),
        direction: "in",
      },
    ],
    sm,
    "component"
  );
