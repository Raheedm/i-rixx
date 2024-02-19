import LoaderImg from '../../assets/i-rixx.gif'
// import LoaderVid from '../../assets/IRIXWEB.mp4'

const Loader = () => {
  return (
    <img alt='I-RIX'
      src={LoaderImg}
      style={{
        position: 'fixed',
        
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 100,
      }}
    />
    // <video
    //   width="100%"
    //   height="100vh"
    //   controls
    //   autoPlay
    //   loop
    //   style={{
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     width: '100%',
    //     height: '100vh',
    //     zIndex: 100,
    //   }}
    // >
    //   <source
    //     src={LoaderVid}
    //     type="video/mp4"
    //   />
    // </video>
  )
}

export default Loader
