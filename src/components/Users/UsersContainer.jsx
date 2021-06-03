import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() { //метод вызывается после создания компоненты (иначе компонент вмонтирован)
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNum) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNum);
        getUsers(pageNum, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

//Первой функции передается состояние и пропсы (). второй имя компоненты
// все это библиотека react-redux, создание контейнерной компоненты
export default connect( mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
    })(UsersContainer);
