import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/> //передача внутрь всех пропсов предварительно разбив на обьект свойств
    }
}

let mapStateToProps = (state) => ({ //круглые скобки когда возвращаем обьект
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent =  withRouter(ProfileContainer); //подобно функции connect из react-redux, оборачивает принятую компоненту контейнерной с данными из урла

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);

