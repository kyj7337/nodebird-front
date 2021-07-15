import './index.scss';

const UserInfo = ({ userInfo, setUserInfo }) => {
  console.log(userInfo);
  const logout = () => {
    setUserInfo(null);
  };
  return (
    <div className='user-info-container'>
      <div className='row'>
        <span className='hello'>안녕하세요! {userInfo.nick}님</span>
      </div>
      <div className='row flex'>
        <div>
          <div className='myinfo-label'>팔로잉</div>
          <div className='count'>{userInfo.following ? userInfo.following : 0}</div>
        </div>
        <div>
          <div className='myinfo-label'>팔로워</div>
          <div className='count'>{userInfo.follower ? userInfo.follower : 0}</div>
        </div>
      </div>
      <div className='logout-container'>
        <div className='logout' onClick={logout}>
          로그아웃
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
