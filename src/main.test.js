import { initializeTimes, updateTimes } from "./main";

test("initializeTimes returns the correct initial times", () => {
    const times = initializeTimes();
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same state when called with unknown action", () => {
    const state = ["17:00", "18:00"];
    const newState = updateTimes(state, { type: "unknown" });
    expect(newState).toEqual(state);
});

test("updateTimes returns updated times when called with 'update_times'", () => {
    const state = [];
    const newState = updateTimes(state, { type: "update_times" });
    expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});
