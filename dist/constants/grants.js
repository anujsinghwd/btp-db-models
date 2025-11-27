"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRANTS = void 0;
const permissions_1 = require("./permissions");
const roles_1 = require("./roles");
const { BASIC, SUPERVISOR, ADMIN, SUPERADMIN } = roles_1.ROLES;
exports.GRANTS = {
    [SUPERADMIN]: {
        [permissions_1.RESOURCES.USERS]: {
            [permissions_1.ACTIONS.CREATE_ANY]: ["*"],
            [permissions_1.ACTIONS.READ_ANY]: ["*"],
            [permissions_1.ACTIONS.UPDATE_ANY]: ["*"],
            [permissions_1.ACTIONS.DELETE_ANY]: ["*"],
        },
    },
    [ADMIN]: {
        [permissions_1.RESOURCES.BOOKING_USERS]: {
            [permissions_1.ACTIONS.DELETE_ANY]: ["*"],
        },
        [permissions_1.RESOURCES.PACKAGES]: {
            [permissions_1.ACTIONS.CREATE_ANY]: ["*"],
            [permissions_1.ACTIONS.READ_ANY]: ["*"],
            [permissions_1.ACTIONS.UPDATE_ANY]: ["*"],
            [permissions_1.ACTIONS.DELETE_ANY]: ["*"],
        },
        [permissions_1.RESOURCES.HOTELS]: {
            [permissions_1.ACTIONS.CREATE_ANY]: ["*"],
            [permissions_1.ACTIONS.UPDATE_ANY]: ["*"],
            [permissions_1.ACTIONS.DELETE_ANY]: ["*"],
        },
        [permissions_1.RESOURCES.INQUIRY]: {
            [permissions_1.ACTIONS.CREATE_ANY]: ["*"],
            [permissions_1.ACTIONS.READ_ANY]: ["*"],
            [permissions_1.ACTIONS.UPDATE_ANY]: ["*"],
            [permissions_1.ACTIONS.DELETE_ANY]: ["*"],
        },
        [permissions_1.RESOURCES.LEADS]: {
            [permissions_1.ACTIONS.READ_ANY]: ["*"],
            [permissions_1.ACTIONS.UPDATE_ANY]: ["*"],
            [permissions_1.ACTIONS.CREATE_ANY]: ["*"],
            [permissions_1.ACTIONS.DELETE_ANY]: ["*"],
        },
        [permissions_1.RESOURCES.EXPENSE]: {
            [permissions_1.ACTIONS.READ_ANY]: ["*"],
            [permissions_1.ACTIONS.UPDATE_ANY]: ["*"],
            [permissions_1.ACTIONS.CREATE_ANY]: ["*"],
            [permissions_1.ACTIONS.DELETE_ANY]: ["*"],
        },
        [permissions_1.RESOURCES.INCOME_SOURCE]: {
            [permissions_1.ACTIONS.READ_ANY]: ["*"],
            [permissions_1.ACTIONS.UPDATE_ANY]: ["*"],
            [permissions_1.ACTIONS.CREATE_ANY]: ["*"],
            [permissions_1.ACTIONS.DELETE_ANY]: ["*"],
        },
    },
    [SUPERVISOR]: {
        [permissions_1.RESOURCES.USERS]: {
            [permissions_1.ACTIONS.READ_ANY]: ["*"],
        },
        [permissions_1.RESOURCES.STATS]: {
            [permissions_1.ACTIONS.READ_ANY]: ["*"],
        },
        [permissions_1.RESOURCES.LEADS]: {
            [permissions_1.ACTIONS.READ_ANY]: ["*"],
            [permissions_1.ACTIONS.UPDATE_OWN]: ["*"],
            [permissions_1.ACTIONS.DELETE_OWN]: ["*"],
        },
        [permissions_1.RESOURCES.HOTELS]: {
            [permissions_1.ACTIONS.CREATE_OWN]: ["*"],
            [permissions_1.ACTIONS.READ_ANY]: ["*"],
            [permissions_1.ACTIONS.UPDATE_OWN]: ["*"],
        },
        [permissions_1.RESOURCES.PACKAGES]: {
            [permissions_1.ACTIONS.CREATE_OWN]: ["*"],
            [permissions_1.ACTIONS.READ_ANY]: ["*"],
            [permissions_1.ACTIONS.UPDATE_OWN]: ["*"],
            [permissions_1.ACTIONS.DELETE_OWN]: ["*"],
        }
    },
    [BASIC]: {
        [permissions_1.RESOURCES.BOOKING_USERS]: {
            [permissions_1.ACTIONS.CREATE_ANY]: ["*"],
            [permissions_1.ACTIONS.READ_ANY]: ["*"],
            [permissions_1.ACTIONS.UPDATE_ANY]: ["*"],
        },
        [permissions_1.RESOURCES.LEADS]: {
            [permissions_1.ACTIONS.CREATE_OWN]: ["*"],
            [permissions_1.ACTIONS.READ_OWN]: ["*"],
        },
    },
};
