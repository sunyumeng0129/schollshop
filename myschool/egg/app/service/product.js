/*
 * @Author: heinan 
 * @Date: 2020-07-15 10:23:53 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-07-16 15:26:45
 */
'use strict';

const Service = require('egg').Service;
const { idCreator } = require('../utils');
const { PRODUCT_DEFAULT_SORTNAME, PRODUCT_DEFAULT_SORTTYPE } = require('../config');

class ProductService extends Service {
    async type() {
        const $sql = 'SELECT t_text,t_type FROM type`type`';
        return await this.ctx.app.mysql.query($sql)
    }
    async sort({ t_type }) {
        const $sql = 'select * from sort where t_type=?'
        return await this.ctx.app.mysql.query($sql, [t_type])
    }
    async list() {
        const $sql = `select * from product `;
        return await this.ctx.app.mysql.query($sql)
    }
    async add({ pname, imgUrl, sales, original_price, sale_price, mode, s_type, t_type, carousel, desc }) {
        const pid = idCreator(pname);
        const $params = [pid, pname, imgUrl, sales, original_price, sale_price, mode, s_type, t_type, carousel, desc];
        const $sql = 'insert into product (pid,pname, imgUrl, sales, original_price, sale_price, `mode`, s_type, t_type, carousel, `desc` ) values (?,?,?,?,?,?,?,?,?,?,?)';
        return await this.ctx.app.mysql.query($sql, $params)
    }
    async edit({ pid, pname, imgUrl, sales, original_price, sale_price, mode, s_type, t_type, carousel, desc, cid }) {
        // const $sql = 'update product set pname=?, imgUrl=?,pname=?, sales=?,original_price=?, sale_price=?,mode=?, s_type=?,t_type=?, carousel=?,`desc`=? cid=? where pid=?';
        const $sql = 'UPDATE `mart`.`product` SET `pname`=?, `imgUrl`=?, `sales`=?, `original_price`=?, `sale_price`=?, `mode`=?, `s_type`=?, `t_type`=?, `cid`=?, `carousel`=?, `desc`=? WHERE  `pid`=?'
        const $params = [pname, imgUrl, sales, original_price, sale_price, mode, s_type, t_type, cid, carousel, desc, pid];
        return await this.ctx.app.mysql.query($sql, $params)
    }
    async delete({ pid }) {
        const $sql = 'DELETE FROM `mart`.`product` WHERE  `pid`=?';
        return await this.ctx.app.mysql.query($sql, [pid])
    }
    async searchByType({ keyword }) {
        const $sql = `select * from product where pname like '%${keyword}%'`;
        return await this.ctx.app.mysql.query($sql)
    }
}

module.exports = ProductService;