/**
 * Created by Administrator on 2017/9/21 0021.
 * 封装常用工具函数,包含对原生基本类型的扩展
 */
export const formatJson = function(filterVal, list) {
  return list.map(v => filterVal.map(j => v[i]))
}

var weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
export const util = {
  extend: function() {
    var options
    var name
    var src
    var copy
    var copyIsArray
    var clone
    var target = arguments[0] || {}
    var i = 1
    var length = arguments.length
    var deep = false

    // Handle a deep copy situation
    if (typeof target === 'boolean') {
      deep = target

      // Skip the boolean and the target
      target = arguments[i] || {}
      i++
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== 'object' && typeof target !== 'function') {
      target = {}
    }

    // Extend jQuery itself if only one argument is passed
    if (i === length) {
      target = this
      i--
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name]
          copy = options[name]

          // Prevent never-ending loop
          if (target === copy) {
            continue
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (copy.constructor === Object || (copyIsArray = Array.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false
              clone = src && Array.isArray(src) ? src : []
            } else {
              clone = src && src.constructor === Object ? src : {}
            }

            // Never move original objects, clone them
            target[name] = this.extend(deep, clone, copy)

            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy
          }
        }
      }
    }
    // Return the modified object
    return target
  },
  getCurDate: function() {
    var date = new Date()

    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    month = month.toString().length > 1 ? month : '0' + month
    day = day.toString().length > 1 ? day : '0' + day
    return { year, month, day }
  },
  getCurTime: function() {
    var date = new Date()

    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()

    hours = hours.toString().length > 1 ? hours : '0' + hours
    minutes = minutes.toString().length > 1 ? minutes : '0' + minutes
    seconds = seconds.toString().length > 1 ? seconds : '0' + seconds

    return { hours, minutes, seconds }
  },
  getWeek: function() {
    var date = new Date()
    var week = weeks[date.getDay()]
    return { week }
  },
  getCurDateTimeWeek: function() {
    var date = this.getCurDate()
    var time = this.getCurTime()
    var week = this.getWeek()

    return (
      date.year +
      '-' +
      date.month +
      '-' +
      date.day +
      ' ' +
      time.hours +
      ':' +
      time.minutes +
      ':' +
      time.seconds +
      ' ' +
      week.week
    )
  },
  dateToStr: function(now, flag) {
    if (!now) return ''
    if (typeof now === 'string') return now
    var year = now.getFullYear()
    var month = now.getMonth() + 1
    var date = now.getDate()
    var hour = now.getHours()
    var min = now.getMinutes()
    var sec = now.getSeconds()
    if (month < 10) {
      month = '0' + month
    }
    if (date < 10) {
      date = '0' + date
    }
    if (hour < 10) {
      hour = '0' + hour
    }
    if (min < 10) {
      min = '0' + min
    }
    if (sec < 10) {
      sec = '0' + sec
    }
    if (flag === 1) {
      return year + '-' + month + '-' + date
    } else if (flag === 2) {
      return hour + ':' + min
    } else if (flag === 3) {
      return year + '-' + month + '-' + date + ' ' + hour + ':' + min
    }
  },
  deepCopy(obj, cache = []) {
    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj)
    if (hit) {
      return hit.copy
    }

    const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
      original: obj,
      copy
    })

    Object.keys(obj).forEach(key => {
      copy[key] = this.deepCopy(obj[key], cache)
    })

    return copy
  },
  isObject: input => typeof input === 'object' && !(input instanceof Array),
  getWindowsParams(key) {
    let params = window.location.search
    if (!params) return
    params = params.split('?')[1].split('/')[0]
    const paramsArray = params.split('&')
    const tempObj = {}
    for (let i = 0; i < paramsArray.length; i++) {
      const tempArr = paramsArray[i].split('=')
      tempObj[tempArr[0]] = tempArr[1]
    }
    return tempObj[key] || ''
  },
  getBackUrlObj() {
    const backUrl = this.getWindowsParams('back_url') || ''
    const returnObj = {}
    if (backUrl) {
      returnObj.name = backUrl
      let query = this.getWindowsParams('query') || ''
      if (query) {
        returnObj.query = {}
        query = decodeURIComponent(query)
        returnObj.query = JSON.parse(query)
      }
      let params = this.getWindowsParams('params') || ''
      if (params) {
        returnObj.params = {}
        params = decodeURIComponent(params)
        returnObj.params = JSON.parse(params)
      }
    }
    return returnObj
  },
  isEmptyObject(e) {
    let t
    for (t in e) {
      return !1
    }
    return !0
  }
}
