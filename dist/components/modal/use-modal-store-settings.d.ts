interface IActions {
    setMaxZIndex: (zIndex: number) => void;
}
interface IInitialState {
    maxZIndex: number;
}
interface IStore extends IInitialState, IActions {
}
export declare const useModalStoreSettings: import("zustand").UseBoundStore<import("zustand").StoreApi<IStore>>;
export {};
//# sourceMappingURL=use-modal-store-settings.d.ts.map