import React from "react";
import styles from "./Users.module.css";
import noUserPhoto from "../../asssets/images/no-user.jpg"
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? styles.pageActive : ''} onClick={(e) => {
                    props.onPageChanged(p);
                }}>{p}</span>
            })}
        </div>
        {
            props.users.map(
                u =>
                    <div key={u.id}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : noUserPhoto} alt=""
                                 className={styles.userPhoto}/>
                        </NavLink>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY" : "1704b594-ba93-4553-a32f-dc30a2bca274"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unFollow(u.id)
                                                }

                                            })

                                    }}>Unfollow</button>
                                    : <button onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY" : "1704b594-ba93-4553-a32f-dc30a2bca274"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id);
                                                }

                                            })

                                    }}>Follow</button>
                            }
                        </div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
            )
        }
    </div>
}

export default Users;