
export const endpoints = {
    LOGIN : "/authenticate",
    REGISTER : "/register",
    CREATE_GIG : "/gigs/create-gig",
    CREATE_MUSICIAN: "/musicians/create",
    CREATE_ORGANIZER: "/organizers/create/",
    CREATE_BAND: "/band-administration/create",
    GET_BAND: "/bands/",
    EDIT_BAND: "/band-administration/edit",
    GET_MUSICIAN_BASIC: "/musicians/show/basic/",
    GET_BAND_ID: "/bands/like/",
    GET_MY_GIGS: "/gigs/",
    INVITE_TO_GIG: "/gigs/invite",
    GET_BAND_GIGS: "/bands/invitations/",
    GET_GIG: "/gigs/view/",
    ACCEPT_GIG: "/bands/invitations/accept",
    CANCEL_GIG: "/bands/invitations/cancel",
    GET_BANDS_LEAD: "/bands/my/leader",
    GET_MUSICIAN: "/musicians/find",
    INVITE_MAIN_MEMB: "/band-administration/invite",
    INVITE_BACKUP_MEMB: "/band-administration/invite-as-backup",
    GET_BAND_INVITATIONS: "/musicians/invitations",
    BANDS_FILTER: "/bands/filter",
    PUBLIC_GIGS_VIEW : "/gigs/get-public",
    GET_ROLES: "/current-roles",
    GET_USER_INFO: "/users/",
    GET_MUSICIAN_POSTS: "/musicians/show/posts/",
    ACCEPT_BAND_INVITE: "/band-administration/join/",
    EDIT_GIG: "/gigs/edit/",
    DECLINE_BAND_INVITE: "/musicians/invitations/cancel/",
    SUBMIT_USER_POST: "/posts/create",
    SUBMIT_COMMENT: "/posts/",
    GET_MUSICIAN_OCASSION: "/musicians/show/occasions/",
    EDIT_MUSICIAN: "/musicians/edit/",
    GET_PERSONAL_CONVERSATIONS: "/conversations/get/personal",
    SEND_MESSAGE: "/conversations/send/person",
    CREATE_CONVERSATION: "/conversations/create"
    /*TO DO: ostali endpointi*/
}

export const InstrumentsList = [
    {
        "id": 1,
        "name": "Marimba",
        "pictureUrl": ""
    },
    {
        "id": 2,
        "name": "Piano",
        "pictureUrl": ""
    },
    {
        "id": 3,
        "name": "Vibraphone",
        "pictureUrl": ""
    },
    {
        "id": 4,
        "name": "Trumpet",
        "pictureUrl": ""
    },
    {
        "id": 5,
        "name": "Xylophone",
        "pictureUrl": ""
    },
    {
        "id": 6,
        "name": "Guitar",
        "pictureUrl": ""
    },
    {
        "id": 7,
        "name": "Clarinet",
        "pictureUrl": ""
    },
    {
        "id": 8,
        "name": "Oboe",
        "pictureUrl": ""
    },
    {
        "id": 9,
        "name": "Violine",
        "pictureUrl": ""
    },
    {
        "id": 10,
        "name": "Flute",
        "pictureUrl": ""
    }
]

