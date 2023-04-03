import { Watch } from "react-loader-spinner";

const Loader = () => {
    return (
        <Watch
  height="180"
  width="180"
  radius="48"
  color="#714185"
  ariaLabel="watch-loading"
  wrapperStyle={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }}
  wrapperClassName=""
  visible={true}
/>
    )
}
export default Loader;
