import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import React from "react";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
      <div>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
        <div className={s.descriptionBlock}>
            {/*альтернативный вариант доступа к данным обьекта obj.[] */ }
            <img src={props.profile.photos.large} alt="" className={s['user-profile__photo']}/>
            <div>{props.profile.fullName}</div>
            <div>Обо мне: {props.profile.aboutMe}</div>
            <div>
                Контакты:
                <ul>
                    <li>{props.profile.contacts.facebook}</li>
                    <li>{props.profile.contacts.website}</li>
                    <li>{props.profile.contacts.vk}</li>
                    <li>{props.profile.contacts.twitter}</li>
                    <li>{props.profile.contacts.instagram}</li>
                    <li>{props.profile.contacts.youtube}</li>
                    <li>{props.profile.contacts.github}</li>
                    <li>{props.profile.contacts.mainLink}</li>
                </ul>
            </div>
            <div>
                Ищет работу:
                <div>
                    {props.profile.lookingForAJob ? <span>Да</span> : <span>Нет</span>}
                </div>
                Дополнительная информация:
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
      </div>
    );
}

export default ProfileInfo