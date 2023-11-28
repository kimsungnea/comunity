import { useParams } from 'react-router-dom';
import './page.css';
import { Link } from 'react-router-dom';

const AgeOne = () => {
    const { category } = useParams();
  
    return (
      <div>
        <div className='Titles'>
                <Link to="/" style={{ textDecoration: "none" }}>거지 키우기</Link>
          {/* 검색 */}
          <button className='Button'>검색</button>

          {/* 찾을 내용 검색 박스 */}
          <input className='Input'></input>
        </div>
        <h1 className='page'>{category} 게시판</h1>
        <div>
            여기서부터는 작성한 글 목록 보여주기
        </div>
      </div>
    );
  };
  
  export default AgeOne;
  