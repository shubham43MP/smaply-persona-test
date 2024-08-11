import React from 'react'
import { renderHook, act } from '@testing-library/react';
import { usePersona } from './usePersona';
import { ImageOrTextEnum } from "../../utils/types";
import { PERSONA_ICONS } from "../../assets/personaAsets";
import { COLORS } from "../../utils/constants";

describe('usePersona hook', () => {
    beforeEach(() => {
        global.URL.createObjectURL = jest.fn();
        global.URL.createObjectURL = jest.fn(() => 'details');
    });
    
    afterEach(() => {
        jest.restoreAllMocks(); // Reset mocks after each test to avoid test interference
    });
    test('initial state values', () => {
        const { result } = renderHook(() => usePersona());
        expect(result.current.modalOpen).toBe(false);
        expect(result.current.displayPicture).toBe(PERSONA_ICONS[0].icon);
        expect(result.current.name).toBe('Rossie Rosmussen');
        expect(result.current.backgroundColor).toBe(COLORS[11]);
        expect(result.current.selectedImage).toBe('');
        expect(result.current.rowOneDataCards).toEqual({});
        expect(result.current.rowTwoDataCards).toEqual({});
    });

    test('handleModal toggles modalOpen state', () => {
        const { result } = renderHook(() => usePersona());

        act(() => {
            result.current.handleModal();
        });
        expect(result.current.modalOpen).toBe(true);

        act(() => {
            result.current.handleModal();
        });
        expect(result.current.modalOpen).toBe(false);
    });

    test('closeHandler sets modalOpen to false', () => {
        const { result } = renderHook(() => usePersona());

        act(() => {
            result.current.handleModal(); // Open the modal first
        });
        expect(result.current.modalOpen).toBe(true);

        act(() => {
            result.current.closeHandler();
        });
        expect(result.current.modalOpen).toBe(false);
    });

    test('setDisplayPicture changes the display picture', () => {
        const { result } = renderHook(() => usePersona());

        const newPicture = PERSONA_ICONS[1].icon;
        act(() => {
            result.current.setDisplayPicture(newPicture);
        });
        expect(result.current.displayPicture).toBe(newPicture);
    });

    test('setBackgroundColor changes the background color', () => {
        const { result } = renderHook(() => usePersona());

        const newColor = COLORS[5];
        act(() => {
            result.current.setBackgroundColor(newColor);
        });
        expect(result.current.backgroundColor).toBe(newColor);
    });

    test('setName changes the name', () => {
        const { result } = renderHook(() => usePersona());

        const newName = 'John Doe';
        act(() => {
            result.current.setName(newName);
        });
        expect(result.current.name).toBe(newName);
    });

    test('handleImageChange updates selectedImage', () => {
        const { result } = renderHook(() => usePersona());

        const file = new File(['(⌐□_□)'], 'cool.png', { type: 'image/png' });
        const event = { target: { files: [file] } } as unknown as React.ChangeEvent<HTMLInputElement>;

        act(() => {
            result.current.handleImageChange(event);
        });
        expect(result.current.selectedImage).toBe(URL.createObjectURL(file));
    });

    test('richTextChangeHandler updates rowOneDataCards', () => {
        const { result } = renderHook(() => usePersona());

        const value = 'Sample text';
        const identifier = 'textId';
        const flag = 1;

        act(() => {
            result.current.richTextChangeHandler(value, identifier, flag);
        });

        expect(result.current.rowOneDataCards[identifier]).toEqual({
            type: ImageOrTextEnum.text,
            content: value,
        });
    });

    test('rendererImageHandler updates rowOneDataCards with image', () => {
        const { result } = renderHook(() => usePersona());

        const item = 'imageId';
        const flag = 1;
        const file = new File(['(⌐□_□)'], 'cool.png', { type: 'image/png' });
        const event = { target: { files: [file] } } as unknown as React.ChangeEvent<HTMLInputElement>;

        act(() => {
            result.current.rendererImageHandler(item, flag)(event);
        });

        expect(result.current.rowOneDataCards[item]).toEqual({
            type: ImageOrTextEnum.image,
            content: URL.createObjectURL(file),
        });
    });

    test('addImageCardTextRenderer adds a new text card to rowOneDataCards', () => {
        const { result } = renderHook(() => usePersona());

        const flag = 1;
        act(() => {
            result.current.addImageCardTextRenderer(ImageOrTextEnum.text, flag);
        });

        const keys = Object.keys(result.current.rowOneDataCards);
        expect(keys.length).toBe(1);

        const newCard = result.current.rowOneDataCards[keys[0]];
        expect(newCard).toEqual({
            type: ImageOrTextEnum.text,
            content: '',
        });
    });
});
