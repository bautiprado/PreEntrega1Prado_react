import RingLoader from 'react-spinners/RingLoader';
import './spinner.css';
const override = {
    display: 'block',
    margin: 'auto',
};

function Spinner({ isLoading }) {
    return (
        <div className="containerSpinner">
            <RingLoader
            loading={isLoading}
            cssOverride={override}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
        </div>
    );
}

export default Spinner;