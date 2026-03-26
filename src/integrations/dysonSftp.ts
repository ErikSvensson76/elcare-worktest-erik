import {config} from '../config/config';
import {FileInfo} from "ssh2-sftp-client";
import * as xml2js from 'xml2js';
import sftp from 'ssh2-sftp-client';
import {dysonMapper} from "../mappers/dysonMapper";
import {toArray} from "../misc/utils";


/**
 * Connects to the Dyson SFTP server, retrieves order files, parses them, and returns the orders as an array of strings.
 * @returns {Promise<any[]>} An array of parsed orders.
 * @throws  Throws "an error if there is an issue connecting to the SFTP server or retrieving/parsing files."
 */
export const uploadOrderToDysonSftp = async () :Promise<any[]> => {

    const client = new sftp();

    try {
        await client.connect({
            host: config.sftp.host,
            username: config.sftp.user,
            password: config.sftp.password,
        });

        // Extracting file(s) to type FileInfo array
        const files: FileInfo[] = await client.list(config.sftp.path ?? "");


        const orders: any[] = [];

        // Iterating though files
        for (const file of files) {

            if (file.type !== '-') continue;

            try {
                // It was unnecessary to create the remotePath here. I used the remotePath for debugging.
                const remotePath = `${config.sftp.path}/${file.name}`;


                const content = await client.get(remotePath);
                const parsed = await xml2js.parseStringPromise(content.toString(), {
                    explicitArray: false, trim: true
                });

                orders.push(parsed);
            }catch (err) {
                console.error("Failed file:", file.name, err)
            }

        }

        // Extracting an array of repairOrder with flatmap
        const allRepairOrders = orders.flatMap(o => toArray(o?.repairOrders?.repairOrder));

        return dysonMapper(allRepairOrders);
    }catch (error) {
        console.log("SFTP ERROR:", error)
        throw error;
    }finally {
        await client.end()
    }
}