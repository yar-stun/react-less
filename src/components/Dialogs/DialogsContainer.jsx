import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messages-reducer";
import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

//Первой функции передается состояние и пропсы (). второй имя компоненты
// все это библиотека react-redux, создание контейнерной компоненты
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;