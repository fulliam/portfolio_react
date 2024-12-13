type Breakpoints = {
    [key: string]: number;
  };
  
  class BreakpointChecker {
    private breakpoints: Breakpoints;
    private currentBreakpoint: string | null = null;
  
    constructor(breakpoints: Breakpoints) {
      this.breakpoints = breakpoints;
      this.updateCurrentBreakpoint();
      window.addEventListener('resize', this.updateCurrentBreakpoint.bind(this));
    }
  
    private updateCurrentBreakpoint() {
      const width = window.innerWidth;
      const activeBreakpoint = Object.entries(this.breakpoints)
        .sort(([, a], [, b]) => b - a)
        .find(([, breakpointWidth]) => width >= breakpointWidth);
  
      this.currentBreakpoint = activeBreakpoint ? activeBreakpoint[0] : null;
    }
  
    isBreakpointActive(breakpoint: string): boolean {
      return this.currentBreakpoint === breakpoint;
    }
  
    getActiveBreakpoint(): string | null {
      return this.currentBreakpoint;
    }
  
    destroy() {
      window.removeEventListener('resize', this.updateCurrentBreakpoint.bind(this));
    }
  }
  
  export default BreakpointChecker;
  