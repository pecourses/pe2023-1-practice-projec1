import data from './data';

function FirstNamingContestPlaform () {
  return (
    <>
      <h2>World's #1 Naming Contest Platform</h2>
      <ul>
        {data.map(({ icon, title, body }) => (
          <li>
            <div>
              <img src={icon} />
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FirstNamingContestPlaform;
