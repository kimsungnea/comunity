import React from 'react'
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const linksTen = [
    { id: 1, text: '10대 개시판', path: '/AgeOne/10age' },
  ];

  const linkstwenty = [
    { id: 2, text: '20대 개시판', path: '/AgeTwo/20age' },
  ];

  const linksthirty = [
    { id: 3, text: '30대 개시판', path: '/AgeThree/30age' },
  ];

  return (
    <div>
      <div className='Titles'>
        <Link to="/" style={{ textDecoration: "none" }}>거지 키우기</Link>
        {/* 검색 */}
        <button className='Button'>검색</button>
        {/* 찾을 내용 검색 박스 */}
        <input className='Input'></input>
      </div>

      <div className='agecomunuty'>
        <div className='ten'>
          <Link to="/AgeOne/10age" style={{ textDecoration: "none" }}>10대</Link>
        </div>

        <div className='twenty'>
          <Link to="/AgeTwo/20age" style={{ textDecoration: "none" }}>20대</Link>
        </div>

        <div className='thirty'>
          <Link to="/AgeThree/30age" style={{ textDecoration: "none" }}>30대</Link>
        </div>
      </div>

      {/* 카테고리 별 개시물 목록 */}
      <div className='category'>
        {/* 10대 개시물 링크 */}
        <div className='One'>
          <ul>
          {/* 배열의 각 항목에 대해 Link를 생성 */}
            {linksTen.map((link) => (
              <li key={link.id}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* {renderLinksByClass('One')} */}
        

        {/* 20대 개시물 링크 */}
        <div className='Two'>
          <ul>
          {/* 배열의 각 항목에 대해 Link를 생성 */}
            {linkstwenty.map((link) => (
              <li key={link.id}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* {renderLinksByClass('Two')} */}

        {/* 30대 개시물 링크 */}
        <div className='Three'>
          <ul>
          {/* 배열의 각 항목에 대해 Link를 생성 */}
            {linksthirty.map((link) => (
              <li key={link.id}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* {renderLinksByClass('Three')} */}
      </div>
      <hr/>

      {/* 홍보 영상 */}
      <div className='movie'>
        <div>
          영상 아무거나
        </div>
      </div>
    </div>
  );
}

export default MainPage;
