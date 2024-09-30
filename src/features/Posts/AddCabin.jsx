import { useState } from 'react';
import Button from '../../ui/Button';
import CreateCabinForm from './CreatePostForm';
import Modal from '../../ui/Modal';
import CabinTable from './CabinTable';

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <div>
          <Button>Add new Cabin</Button>
        </div>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
// 	const [isOpenModal, setIsOpenModal] = useState(false);
// 	return (
// 		<div>
// 			<Button
// 				onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}
// 				variation="primary"
// 			>
// 				Add new Cabin
// 			</Button>
// 			{isOpenModal && (
// 				<Modal onClose={() => setIsOpenModal(false)}>
// 					<CreateCabinForm
// 						onCloseModal={() => setIsOpenModal(false)}
// 					/>
// 				</Modal>
// 			)}
// 		</div>
// 	);
// }

export default AddCabin;
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   roomData: null,
//   isLoading: false,
// };

// const postSlice = createSlice({
//   name: 'postMap',
//   initialState,
//   reducers: {
//     saveRoom: {
//       prepare(
//         title,
//         roomNumbers,
//         sharedRoom,
//         preferredFloor,
//         location,
//         description,
//       ) {
//         return {
//           payload: {
//             title,
//             roomNumbers,
//             sharedRoom,
//             preferredFloor,
//             location,
//             description,
//           },
//         };
//       },
//       reducer(state, action) {
//         state.roomData = action.payload; // Save the room data into the Redux state
//       },
//     },
//   },
// });

// export const { saveRoom } = postSlice.actions;
// export default postSlice.reducer;
