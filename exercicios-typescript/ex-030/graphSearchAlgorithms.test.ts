import { expect } from "@jest/globals";
import { hasRouteFrom, adjacencyNodes } from "./graphSearchAlgorithm";

describe('Testing every single possible route', () => {
    test("Route from PHX to BKK", () => {
        expect(hasRouteFrom("PHX", "BKK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from PHX to OKC", () => {
        expect(hasRouteFrom("PHX", "OKC", adjacencyNodes)).toBe(true);
    });
    
    test("Route from PHX to JFK", () => {
        expect(hasRouteFrom("PHX", "JFK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from PHX to LAX", () => {
        expect(hasRouteFrom("PHX", "LAX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from PHX to MEX", () => {
        expect(hasRouteFrom("PHX", "MEX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from PHX to EZE", () => {
        expect(hasRouteFrom("PHX", "EZE", adjacencyNodes)).toBe(true);
    });
    
    test("Route from PHX to HEL", () => {
        expect(hasRouteFrom("PHX", "HEL", adjacencyNodes)).toBe(true);
    });
    
    test("Route from PHX to LOS", () => {
        expect(hasRouteFrom("PHX", "LOS", adjacencyNodes)).toBe(true);
    });
    
    test("Route from PHX to LAP", () => {
        expect(hasRouteFrom("PHX", "LAP", adjacencyNodes)).toBe(false);
    });
    
    test("Route from PHX to LIM", () => {
        expect(hasRouteFrom("PHX", "LIM", adjacencyNodes)).toBe(true);
    });
    
    test("Route from BKK to PHX", () => {
        expect(hasRouteFrom("BKK", "PHX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from BKK to OKC", () => {
        expect(hasRouteFrom("BKK", "OKC", adjacencyNodes)).toBe(true);
    });
    
    test("Route from BKK to JFK", () => {
        expect(hasRouteFrom("BKK", "JFK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from BKK to LAX", () => {
        expect(hasRouteFrom("BKK", "LAX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from BKK to MEX", () => {
        expect(hasRouteFrom("BKK", "MEX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from BKK to EZE", () => {
        expect(hasRouteFrom("BKK", "EZE", adjacencyNodes)).toBe(true);
    });
    
    test("Route from BKK to HEL", () => {
        expect(hasRouteFrom("BKK", "HEL", adjacencyNodes)).toBe(true);
    });
    
    test("Route from BKK to LOS", () => {
        expect(hasRouteFrom("BKK", "LOS", adjacencyNodes)).toBe(true);
    });
    
    test("Route from BKK to LAP", () => {
        expect(hasRouteFrom("BKK", "LAP", adjacencyNodes)).toBe(false);
    });
    
    test("Route from BKK to LIM", () => {
        expect(hasRouteFrom("BKK", "LIM", adjacencyNodes)).toBe(true);
    });
    
    test("Route from OKC to PHX", () => {
        expect(hasRouteFrom("OKC", "PHX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from OKC to BKK", () => {
        expect(hasRouteFrom("OKC", "BKK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from OKC to JFK", () => {
        expect(hasRouteFrom("OKC", "JFK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from OKC to LAX", () => {
        expect(hasRouteFrom("OKC", "LAX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from OKC to MEX", () => {
        expect(hasRouteFrom("OKC", "MEX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from OKC to EZE", () => {
        expect(hasRouteFrom("OKC", "EZE", adjacencyNodes)).toBe(true);
    });
    
    test("Route from OKC to HEL", () => {
        expect(hasRouteFrom("OKC", "HEL", adjacencyNodes)).toBe(true);
    });
    
    test("Route from OKC to LOS", () => {
        expect(hasRouteFrom("OKC", "LOS", adjacencyNodes)).toBe(true);
    });
    
    test("Route from OKC to LAP", () => {
        expect(hasRouteFrom("OKC", "LAP", adjacencyNodes)).toBe(false);
    });
    
    test("Route from OKC to LIM", () => {
        expect(hasRouteFrom("OKC", "LIM", adjacencyNodes)).toBe(true);
    });
    
    test("Route from JFK to PHX", () => {
        expect(hasRouteFrom("JFK", "PHX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from JFK to BKK", () => {
        expect(hasRouteFrom("JFK", "BKK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from JFK to OKC", () => {
        expect(hasRouteFrom("JFK", "OKC", adjacencyNodes)).toBe(true);
    });
    
    test("Route from JFK to LAX", () => {
        expect(hasRouteFrom("JFK", "LAX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from JFK to MEX", () => {
        expect(hasRouteFrom("JFK", "MEX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from JFK to EZE", () => {
        expect(hasRouteFrom("JFK", "EZE", adjacencyNodes)).toBe(true);
    });
    
    test("Route from JFK to HEL", () => {
        expect(hasRouteFrom("JFK", "HEL", adjacencyNodes)).toBe(true);
    });
    
    test("Route from JFK to LOS", () => {
        expect(hasRouteFrom("JFK", "LOS", adjacencyNodes)).toBe(true);
    });
    
    test("Route from JFK to LAP", () => {
        expect(hasRouteFrom("JFK", "LAP", adjacencyNodes)).toBe(false);
    });
    
    test("Route from JFK to LIM", () => {
        expect(hasRouteFrom("JFK", "LIM", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LAX to PHX", () => {
        expect(hasRouteFrom("LAX", "PHX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LAX to BKK", () => {
        expect(hasRouteFrom("LAX", "BKK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LAX to OKC", () => {
        expect(hasRouteFrom("LAX", "OKC", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LAX to JFK", () => {
        expect(hasRouteFrom("LAX", "JFK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LAX to MEX", () => {
        expect(hasRouteFrom("LAX", "MEX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LAX to EZE", () => {
        expect(hasRouteFrom("LAX", "EZE", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LAX to HEL", () => {
        expect(hasRouteFrom("LAX", "HEL", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LAX to LOS", () => {
        expect(hasRouteFrom("LAX", "LOS", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LAX to LAP", () => {
        expect(hasRouteFrom("LAX", "LAP", adjacencyNodes)).toBe(false);
    });
    
    test("Route from LAX to LIM", () => {
        expect(hasRouteFrom("LAX", "LIM", adjacencyNodes)).toBe(true);
    });
    
    test("Route from MEX to PHX", () => {
        expect(hasRouteFrom("MEX", "PHX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from MEX to BKK", () => {
        expect(hasRouteFrom("MEX", "BKK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from MEX to OKC", () => {
        expect(hasRouteFrom("MEX", "OKC", adjacencyNodes)).toBe(true);
    });
    
    test("Route from MEX to JFK", () => {
        expect(hasRouteFrom("MEX", "JFK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from MEX to LAX", () => {
        expect(hasRouteFrom("MEX", "LAX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from MEX to EZE", () => {
        expect(hasRouteFrom("MEX", "EZE", adjacencyNodes)).toBe(true);
    });
    
    test("Route from MEX to HEL", () => {
        expect(hasRouteFrom("MEX", "HEL", adjacencyNodes)).toBe(true);
    });
    
    test("Route from MEX to LOS", () => {
        expect(hasRouteFrom("MEX", "LOS", adjacencyNodes)).toBe(true);
    });
    
    test("Route from MEX to LAP", () => {
        expect(hasRouteFrom("MEX", "LAP", adjacencyNodes)).toBe(false);
    });
    
    test("Route from MEX to LIM", () => {
        expect(hasRouteFrom("MEX", "LIM", adjacencyNodes)).toBe(true);
    });
    
    test("Route from EZE to PHX", () => {
        expect(hasRouteFrom("EZE", "PHX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from EZE to BKK", () => {
        expect(hasRouteFrom("EZE", "BKK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from EZE to OKC", () => {
        expect(hasRouteFrom("EZE", "OKC", adjacencyNodes)).toBe(true);
    });
    
    test("Route from EZE to JFK", () => {
        expect(hasRouteFrom("EZE", "JFK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from EZE to LAX", () => {
        expect(hasRouteFrom("EZE", "LAX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from EZE to MEX", () => {
        expect(hasRouteFrom("EZE", "MEX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from EZE to HEL", () => {
        expect(hasRouteFrom("EZE", "HEL", adjacencyNodes)).toBe(true);
    });
    
    test("Route from EZE to LOS", () => {
        expect(hasRouteFrom("EZE", "LOS", adjacencyNodes)).toBe(true);
    });
    
    test("Route from EZE to LAP", () => {
        expect(hasRouteFrom("EZE", "LAP", adjacencyNodes)).toBe(false);
    });
    
    test("Route from EZE to LIM", () => {
        expect(hasRouteFrom("EZE", "LIM", adjacencyNodes)).toBe(true);
    });
    
    test("Route from HEL to PHX", () => {
        expect(hasRouteFrom("HEL", "PHX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from HEL to BKK", () => {
        expect(hasRouteFrom("HEL", "BKK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from HEL to OKC", () => {
        expect(hasRouteFrom("HEL", "OKC", adjacencyNodes)).toBe(true);
    });
    
    test("Route from HEL to JFK", () => {
        expect(hasRouteFrom("HEL", "JFK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from HEL to LAX", () => {
        expect(hasRouteFrom("HEL", "LAX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from HEL to MEX", () => {
        expect(hasRouteFrom("HEL", "MEX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from HEL to EZE", () => {
        expect(hasRouteFrom("HEL", "EZE", adjacencyNodes)).toBe(true);
    });
    
    test("Route from HEL to LOS", () => {
        expect(hasRouteFrom("HEL", "LOS", adjacencyNodes)).toBe(true);
    });
    
    test("Route from HEL to LAP", () => {
        expect(hasRouteFrom("HEL", "LAP", adjacencyNodes)).toBe(false);
    });
    
    test("Route from HEL to LIM", () => {
        expect(hasRouteFrom("HEL", "LIM", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LOS to PHX", () => {
        expect(hasRouteFrom("LOS", "PHX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LOS to BKK", () => {
        expect(hasRouteFrom("LOS", "BKK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LOS to OKC", () => {
        expect(hasRouteFrom("LOS", "OKC", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LOS to JFK", () => {
        expect(hasRouteFrom("LOS", "JFK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LOS to LAX", () => {
        expect(hasRouteFrom("LOS", "LAX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LOS to MEX", () => {
        expect(hasRouteFrom("LOS", "MEX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LOS to EZE", () => {
        expect(hasRouteFrom("LOS", "EZE", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LOS to HEL", () => {
        expect(hasRouteFrom("LOS", "HEL", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LOS to LAP", () => {
        expect(hasRouteFrom("LOS", "LAP", adjacencyNodes)).toBe(false);
    });
    
    test("Route from LOS to LIM", () => {
        expect(hasRouteFrom("LOS", "LIM", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LAP to PHX", () => {
        expect(hasRouteFrom("LAP", "PHX", adjacencyNodes)).toBe(false);
    });
    
    test("Route from LAP to BKK", () => {
        expect(hasRouteFrom("LAP", "BKK", adjacencyNodes)).toBe(false);
    });
    
    test("Route from LAP to OKC", () => {
        expect(hasRouteFrom("LAP", "OKC", adjacencyNodes)).toBe(false);
    });
    
    test("Route from LAP to JFK", () => {
        expect(hasRouteFrom("LAP", "JFK", adjacencyNodes)).toBe(false);
    });
    
    test("Route from LAP to LAX", () => {
        expect(hasRouteFrom("LAP", "LAX", adjacencyNodes)).toBe(false);
    });
    
    test("Route from LAP to MEX", () => {
        expect(hasRouteFrom("LAP", "MEX", adjacencyNodes)).toBe(false);
    });
    
    test("Route from LAP to EZE", () => {
        expect(hasRouteFrom("LAP", "EZE", adjacencyNodes)).toBe(false);
    });
    
    test("Route from LAP to HEL", () => {
        expect(hasRouteFrom("LAP", "HEL", adjacencyNodes)).toBe(false);
    });
    
    test("Route from LAP to LOS", () => {
        expect(hasRouteFrom("LAP", "LOS", adjacencyNodes)).toBe(false);
    });
    
    test("Route from LAP to LIM", () => {
        expect(hasRouteFrom("LAP", "LIM", adjacencyNodes)).toBe(false);
    });
    
    test("Route from LIM to PHX", () => {
        expect(hasRouteFrom("LIM", "PHX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LIM to BKK", () => {
        expect(hasRouteFrom("LIM", "BKK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LIM to OKC", () => {
        expect(hasRouteFrom("LIM", "OKC", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LIM to JFK", () => {
        expect(hasRouteFrom("LIM", "JFK", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LIM to LAX", () => {
        expect(hasRouteFrom("LIM", "LAX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LIM to MEX", () => {
        expect(hasRouteFrom("LIM", "MEX", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LIM to EZE", () => {
        expect(hasRouteFrom("LIM", "EZE", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LIM to HEL", () => {
        expect(hasRouteFrom("LIM", "HEL", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LIM to LOS", () => {
        expect(hasRouteFrom("LIM", "LOS", adjacencyNodes)).toBe(true);
    });
    
    test("Route from LIM to LAP", () => {
        expect(hasRouteFrom("LIM", "LAP", adjacencyNodes)).toBe(false);
    });    
})
