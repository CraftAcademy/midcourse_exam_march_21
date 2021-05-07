import React from 'react'

const SearchResults = ({ searchResults }) => {
  return (
    <div style={styles.container}>
      {searchResults.map((user, i) => (
        <div key={i} style={styles.row} data-cy='user-container'>
          <div >
            <img data-cy='avatar' style={styles.img} src={user.avatar_url} alt={user.login} />
          </div>
          <div style={styles.info}>
            <p style={{fontWeight: 'bold', fontSize: '20px'}} data-cy='username' >
              {user.login}</p>
            <p><a data-cy='url' href={user.html_url}>Link to GitHub:</a> </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchResults

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: '1px solid lightgrey',
    padding: 15,
  },
  img: {
    borderRadius: '50%',
    height: 100,
    width: 100
  },
  info: {
    padding: 20
  }
}