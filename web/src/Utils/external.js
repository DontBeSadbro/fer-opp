import * as Types from "./Types";
import Cookies from "js-cookie";

require('dotenv').config();
console.log(process.env.NODE_ENV === 'production'?"Prod":"Dev")

const API = process.env.NODE_ENV === 'production'?"https://giger-backend.herokuapp.com/api":"https://giger-backend-dev.herokuapp.com/api";
//console.log(API)


export default function fetcingFactory (endpoint, params, id) {
    // eslint-disable-next-line
    switch (endpoint) {
        case Types.endpoints.LOGIN:
            return sendLoginInfo(params, endpoint);
        case Types.endpoints.REGISTER:
            return sendRegisterInfo(params,endpoint);
        case Types.endpoints.CREATE_GIG:
            return createGig(params, endpoint);
        case Types.endpoints.CREATE_MUSICIAN:
            return createMusician(params,endpoint);
        case Types.endpoints.CREATE_ORGANIZER:
            return createOrganizer(params,endpoint);
        case Types.endpoints.CREATE_BAND:
            return createBand(params, endpoint);
        case Types.endpoints.GET_BAND:
            return getBand(params, endpoint);
        case Types.endpoints.EDIT_BAND:
            return editBand(params,endpoint);
        case Types.endpoints.GET_MUSICIAN_BASIC:
            return getBasicMusician(params,endpoint);
        case Types.endpoints.GET_BAND_ID:
            return getBandId(params, endpoint);
        case Types.endpoints.GET_MY_GIGS:
            return getGigs(params, endpoint);
        case Types.endpoints.INVITE_TO_GIG:
            return inviteToGig(params, endpoint);
        case Types.endpoints.GET_BAND_GIGS:
            return getInvites(params, endpoint);
        case Types.endpoints.GET_GIG:
            return getGig(params, endpoint);
        case Types.endpoints.ACCEPT_GIG:
            return acceptGig(params,endpoint);
        case Types.endpoints.CANCEL_GIG:
            return declineGig(params,endpoint);
        case Types.endpoints.GET_BANDS_LEAD:
            return getBandsLeader(params,endpoint);
        case Types.endpoints.GET_MUSICIAN:
            return getMusician(params,endpoint);
        case Types.endpoints.INVITE_MAIN_MEMB:
            return inviteMainMemb(params, endpoint);
        case Types.endpoints.INVITE_BACKUP_MEMB:
            return inviteBackupMemb(params, endpoint);
        case Types.endpoints.GET_BAND_INVITATIONS:
            return getBandInvitations(params, endpoint);
        case Types.endpoints.PUBLIC_GIGS_VIEW:
            return getPublicGigs(params,endpoint);
        case Types.endpoints.BANDS_FILTER:
            return getBandslist(params,endpoint);
        case Types.endpoints.GET_ROLES:
            return getRoles(params, endpoint);
        case Types.endpoints.GET_USER_INFO:
            return getUserInfo(params, endpoint);
        case Types.endpoints.GET_MUSICIAN_POSTS:
            return getMusicianPosts(params, endpoint);
        case Types.endpoints.ACCEPT_BAND_INVITE:
            return accBandInvite(params, endpoint);
        case Types.endpoints.EDIT_GIG:
            return editGig(params, endpoint, id);
        case Types.endpoints.DECLINE_BAND_INVITE:
            return declineBandInvite(params, endpoint);
        case Types.endpoints.SUBMIT_USER_POST:
            return createPost(params, endpoint);
        case Types.endpoints.SUBMIT_COMMENT:
            return submitComment(params,endpoint,id);
        case Types.endpoints.GET_MUSICIAN_OCASSION:
            return getMusicianOcassion(params, endpoint);
        case Types.endpoints.EDIT_MUSICIAN:
            return editMusician(params, endpoint);
        case Types.endpoints.GET_PERSONAL_CONVERSATIONS:
            return getPersonalConversations(params, endpoint);
        case Types.endpoints.SEND_MESSAGE:
            return sendMessage(params, endpoint);
        case Types.endpoints.CREATE_CONVERSATION:
            return createConversation(params, endpoint);
    }
}

function getBandId(params, endpoint) {
    console.log(API + endpoint + params)
    return fetch(API + endpoint + params, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function getGigs(params, endpoint) {
    console.log(API + endpoint + params)
    return fetch(API + endpoint + params, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function getGig(params, endpoint) {
    console.log(API + endpoint + params)
    return fetch(API + endpoint + params, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function inviteToGig(params, endpoint) {
    return fetch(API + endpoint, {
        method: "POST",
        body: params,
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}
function sendLoginInfo(params, endpoint) {
    return fetch(API + endpoint, 
        {
            method: "POST",
            body: params,
            headers: {"Content-Type" : "application/json"}
        })
}

function sendRegisterInfo(params, endpoint) {
    return fetch(API + endpoint,
        {
            method: "POST",
            body: params,
            headers: {"Content-Type" : "application/json"}
        })
}

function createGig(params, endpoint) {
    return fetch(API + endpoint, {
        method: "POST",
        body: params,
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")}
    })
}

function acceptGig(params, endpoint) {
    return fetch(API + endpoint, {
        method: "POST",
        body: params,
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")}
    })
}

function declineGig(params, endpoint) {
    return fetch(API + endpoint, {
        method: "POST",
        body: params,
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")}
    })
}

function createMusician(params,endpoint) {
    return fetch(API + endpoint, {
        method:"POST",
        body: params,
        headers: {            
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function createOrganizer(params, endpoint) {
    return fetch(API + endpoint + params, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function createBand(params, endpoint) {
    return fetch(API + endpoint, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        },
        body: params
    })
}

function getBand(params, endpoint) {
    return fetch(API + endpoint + params,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function getInvites(params, endpoint) {
    console.log(API + endpoint + params)
    return fetch(API + endpoint + params, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function getBandsLeader(params, endpoint) {
    console.log(API + endpoint)
    return fetch(API + endpoint, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function editBand(params,endpoint) {
    return fetch(API + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        },
        body: params
    })
}

function getBasicMusician(params, endpoint) {
    return fetch(API + endpoint + params, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}
function getMusician(params, endpoint) {
    console.log(API + endpoint)
    return fetch(API + endpoint, {
        method: "POST",
        body: params,
        headers: {            
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function inviteMainMemb(params,endpoint) {
    return fetch(API + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        },
        body: params
    })
}

function inviteBackupMemb(params,endpoint) {
    return fetch(API + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        },
        body: params
    })
}

function getBandInvitations(params, endpoint) {
    return fetch(API + endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function getPublicGigs(params, endpoint) {
    return fetch(API + endpoint, {
        method: "GET"
    })
}

function getBandslist(params, endpoint) {
    console.log(API + endpoint)
    return fetch(API + endpoint, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function getRoles(params, endpoint) {
    return fetch(API + endpoint, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function getUserInfo(params, endpoint) {
    return fetch(API + endpoint + params, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function getMusicianPosts(params, endpoint) {
    return fetch(API + endpoint + params, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function accBandInvite(params, endpoint) {
    console.log(API + endpoint + params)
    return fetch(API + endpoint + params, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")

        }
    })
}

function editGig(params, endpoint, id) {
    return fetch(API + endpoint + id, {
        method: "POST",
        body: params,
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")}
    })
}

function declineBandInvite(params, endpoint) {
    console.log(API + endpoint + params)
    return fetch(API + endpoint + params, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")

        }
    })
}

function createPost(params, endpoint) {
    return fetch(API + endpoint, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        },
        body: params
    })
}

function submitComment(params, endpoint, id) {
    return fetch(API + endpoint + id, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        },
        body: params
    })
}

function getMusicianOcassion(params, endpoint) {
    return fetch(API + endpoint + params, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function editMusician(params, endpoint) {
    return fetch(API+ endpoint, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        },
        body: params
    })
}

function getPersonalConversations(params, endpoint) {
    return fetch(API + endpoint, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        }
    })
}

function sendMessage(params, endpoint) {
    return fetch(API + endpoint, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        },
        body: params
    })
}

function createConversation(params, endpoint) {
    return fetch(API + endpoint, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + Cookies.get("Bearer")
        },
        body: params
    })
}