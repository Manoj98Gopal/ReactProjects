import { describe, it, expect } from 'vitest';
import { add } from '../components/utils.js';

describe("Add function", () => {
    it("should add two positive numbers", () => {
        expect(add(2,3)).toBe(5);
    });

    it("should add a number and zero", () => {
        expect(add(5, 0)).toBe(5);
    });
});