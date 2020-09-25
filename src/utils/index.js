/**
 * by https://github.com/PanJiaChen/vue-admin-template
 */
import { getToken } from '@/utils/auth'
import defaultSettings from '@/settings'

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/**
 * 获取导出路径
 * @param {string} url
 * @param {string} params
 */
export function extendLink(url, params) {
  const paramArr = []
  Object.keys(params).forEach((key) => {
    if (params[key] !== null && params[key] !== undefined) {
      paramArr.push(`${key}=${params[key]}`)
    }
  })
  if (url.indexOf('?') >= 0) {
    url += '&' + paramArr.join('&')
  } else {
    url += '?' + paramArr.join('&')
  }
  url += '&token=' + getToken()
  return process.env.VUE_APP_BASE_API + url
}

/**
 * 随机字符生成
 * @param {number} len
 */
export function randomString(len) {
  len = len || 12
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charsLen = chars.length
  let str = ''
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * charsLen))
  }
  return str
}

/**
 * 随机字符生成
 * @param {number} len
 */
export function randomStringNumber(len) {
  let str = randomString(len)
  const numbers = /[0-9]+/
  const strings = /[A-Za-z]+/
  let tryCount = 5
  while (tryCount > 0) {
    if (numbers.test(str) && strings.test(str)) {
      break
    }
    str = randomString(len)
    tryCount--
  }
  return str
}

/**
 * 调试输出
 * @param  {...any} str
 */
export function debug(...str) {
  if (process.env.VUE_APP_DEBUG === 'true') {
    console.log(...str)
  }
}

/**
 * 获取标题
 * @param {string} pageTitle
 */
export function getPageTitle(pageTitle) {
  const title = defaultSettings.title
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

/**
 * 菜单处理
 * @param {object} router
 */
export function getMenuItems(router) {
  const menuItems = []
  for (const i in router) {
    const children = router[i].children
    if (children) {
      if (children.length > 1) {
        const child = []
        for (const j in children) {
          child.push({
            name: children[j].name,
            path: children[j].path,
            meta: children[j].meta,
            hidden: children[j].hidden && children[j].hidden === true
          })
        }
        menuItems.push({
          name: router[i].name,
          path: router[i].path,
          meta: router[i].meta,
          hidden: router[i].hidden && router[i].hidden === true,
          children: child
        })
      } else {
        for (const j in children) {
          menuItems.push({
            name: children[j].name,
            path: children[j].path,
            meta: children[j].meta,
            hidden: children[j].hidden && children[j].hidden === true
          })
        }
      }
    } else {
      menuItems.push({
        name: router[i].name,
        path: router[i].path,
        meta: router[i].meta,
        hidden: router[i].hidden
      })
    }
  }
  return menuItems
}
