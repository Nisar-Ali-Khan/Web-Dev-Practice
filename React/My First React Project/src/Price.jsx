export default function Price({oldPrice, newPrice}) {

    let oldStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
    }
    let newStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
    }
    let styles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'green',
    }

  return (
    <div style={styles}>
      <p style={oldStyles}>{oldPrice}</p>
      <p style={newStyles}>{newPrice}</p>
    </div>
  );
}
