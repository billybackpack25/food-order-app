import PropTypes from 'prop-types';

import Modal from '../UI/Modal/Modal';
import useStepper from '../../hooks/useStepper';
import { Cart, AddressForm, Checkout } from './steps';

const CartModal = ({ isOpen, onClose }) => {
  const { currentStep } = useStepper(<Cart />, <AddressForm />, <Checkout />);

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      {currentStep}
    </Modal>
  );
};

CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default CartModal;
