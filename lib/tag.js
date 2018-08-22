const chalk = require('chalk')
const {exec} = require('child_process')
module.exports = (argv)=>{
    exec(`git tag -a "${argv.t}" -m "${argv.m}"`,(error,stdout)=>{
        if(error){
            console.error(chalk.red('exec tag ' )+error)
            return
        }
        console.log(chalk.yellow('seccess:')+chalk.blue(`tag`))
        exec("git push origin --tags",(error)=>{
            if(error){
                console.error(chalk.red('exec push tag ' )+error)
                return
            }
            console.log(chalk.yellow('seccess:')+chalk.blue(`push tag -  ${argv.t}`))
        })
    })
}