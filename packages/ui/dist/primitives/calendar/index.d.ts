import { DayPicker } from 'react-day-picker';
import * as React from 'react';
export type CalendarProps = React.ComponentProps<typeof DayPicker>;
/**
 * A calendar component that uses the `react-day-picker` library.
 * @param props The calendar props.
 * @param props.className The className to apply to the calendar.
 * @param props.classNames The class names to apply to the calendar elements.
 * @param props.showOutsideDays Whether to show outside days.
 * @returns The calendar component.
 */
declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
declare namespace Calendar {
    var displayName: string;
}
export { Calendar };
//# sourceMappingURL=index.d.ts.map