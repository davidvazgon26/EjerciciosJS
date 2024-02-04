import groovy.time.TimeCategory

use(TimeCategory){
    Date date = new Date("03/20/2021")
    Date datePlus30Minutes = date + 30.minutes
    Date dateYearAgo = date - 1.years
    Date date10HoursFromDate = date + 10.hours

    Date now = new Date()
    Date thirtyMinutesAgo = 30.minutes.from.now

    println date
    println datePlus30Minutes
    println dateYearAgo
    println date10HoursFromDate

    println '-'*30

    println now
    println thirtyMinutesAgo
}