import React from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
/* const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}; */

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ReactModal({ icon, title, body }) {
	let subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<button onClick={openModal}>{icon}</button>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				/* style={customStyles} */
				contentLabel="Example Modal"
			>
				<div className="flex justify-between select-none border-b shadow-2xl text-3xl">
					<h1 ref={_subtitle => (subtitle = _subtitle)}>{title}</h1>
					<FaWindowClose onClick={closeModal} />
				</div>

				{body}
			</Modal>
		</div>
	);
}
export default ReactModal;
