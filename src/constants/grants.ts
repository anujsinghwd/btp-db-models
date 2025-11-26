import { RESOURCES, ACTIONS } from "./permissions";
import { ROLES } from "./roles";

const { BASIC, SUPERVISOR, ADMIN, SUPERADMIN } = ROLES;

export const GRANTS = {
  [SUPERADMIN]: {
    [RESOURCES.USERS]: {
      [ACTIONS.CREATE_ANY]: ["*"],
      [ACTIONS.READ_ANY]: ["*"],
      [ACTIONS.UPDATE_ANY]: ["*"],
      [ACTIONS.DELETE_ANY]: ["*"],
    },
  },
  [ADMIN]: {
    [RESOURCES.BOOKING_USERS]: {
      [ACTIONS.DELETE_ANY]: ["*"],
    },
    [RESOURCES.PACKAGES]: {
      [ACTIONS.CREATE_ANY]: ["*"],
      [ACTIONS.READ_ANY]: ["*"],
      [ACTIONS.UPDATE_ANY]: ["*"],
      [ACTIONS.DELETE_ANY]: ["*"],
    },
    [RESOURCES.HOTELS]: {
      [ACTIONS.CREATE_ANY]: ["*"],
      [ACTIONS.UPDATE_ANY]: ["*"],
      [ACTIONS.DELETE_ANY]: ["*"],
    },
    [RESOURCES.INQUIRY]: {
      [ACTIONS.CREATE_ANY]: ["*"],
      [ACTIONS.READ_ANY]: ["*"],
      [ACTIONS.UPDATE_ANY]: ["*"],
      [ACTIONS.DELETE_ANY]: ["*"],
    },
    [RESOURCES.LEADS]: {
      [ACTIONS.READ_ANY]: ["*"],
      [ACTIONS.UPDATE_ANY]: ["*"],
      [ACTIONS.CREATE_ANY]: ["*"],
      [ACTIONS.DELETE_ANY]: ["*"],
    },
    [RESOURCES.EXPENSE]: {
      [ACTIONS.READ_ANY]: ["*"],
      [ACTIONS.UPDATE_ANY]: ["*"],
      [ACTIONS.CREATE_ANY]: ["*"],
      [ACTIONS.DELETE_ANY]: ["*"],
    },
    [RESOURCES.INCOME_SOURCE]: {
      [ACTIONS.READ_ANY]: ["*"],
      [ACTIONS.UPDATE_ANY]: ["*"],
      [ACTIONS.CREATE_ANY]: ["*"],
      [ACTIONS.DELETE_ANY]: ["*"],
    },
  },
  [SUPERVISOR]: {
    [RESOURCES.USERS]: {
      [ACTIONS.READ_ANY]: ["*"],
    },
    [RESOURCES.STATS]: {
      [ACTIONS.READ_ANY]: ["*"],
    },
    [RESOURCES.LEADS]: {
      [ACTIONS.READ_ANY]: ["*"],
      [ACTIONS.UPDATE_OWN]: ["*"],
      [ACTIONS.DELETE_OWN]: ["*"],
    },
    [RESOURCES.HOTELS]: {
      [ACTIONS.CREATE_OWN]: ["*"],
      [ACTIONS.READ_ANY]: ["*"],
      [ACTIONS.UPDATE_OWN]: ["*"],
    },
    [RESOURCES.PACKAGES]: {
      [ACTIONS.CREATE_OWN]: ["*"],
      [ACTIONS.READ_ANY]: ["*"],
      [ACTIONS.UPDATE_OWN]: ["*"],
      [ACTIONS.DELETE_OWN]: ["*"],
    }
  },
  [BASIC]: {
    [RESOURCES.BOOKING_USERS]: {
      [ACTIONS.CREATE_ANY]: ["*"],
      [ACTIONS.READ_ANY]: ["*"],
      [ACTIONS.UPDATE_ANY]: ["*"],
    },
    [RESOURCES.LEADS]: {
      [ACTIONS.CREATE_OWN]: ["*"],
      [ACTIONS.READ_OWN]: ["*"],
    },
  },
};
