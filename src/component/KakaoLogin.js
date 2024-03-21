import React from 'react';

function KakaoLogin() {
    const Rest_api_key = '947bb0721b6df0ee8869d2df3904662b'; // REST API KEY
    const redirect_uri = 'https://localhost:3000/login'; // Redirect URI

    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

    const handleLogin = () => {
        window.location.href = kakaoURL;
    };

    return (
        <>
            <button onClick={handleLogin} className='kakaoButton'>카카오 로그인</button>
        </>
    );
}

export default KakaoLogin;
