import { type StateCreator, create } from 'zustand';

interface IActions {
  setMaxZIndex: (zIndex: number) => void;
}

interface IInitialState {
  maxZIndex: number;
}

interface IStore extends IInitialState, IActions {}

const initialState: IInitialState = {
  maxZIndex: 2
};

const modalStoreSettings: StateCreator<IStore> = (set, get) => ({
  ...initialState,
  setMaxZIndex: (maxZIndex) => set({ maxZIndex })
});

export const useModalStoreSettings = create<IStore>(modalStoreSettings);
