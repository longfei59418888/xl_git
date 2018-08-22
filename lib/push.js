const chalk = require('chalk')
const {exec} = require('child_process')
module.exports = (file,argv)=>{
    file = file?file:'.'
    exec(`git add ${file}`,(error)=>{
        if(error){
            console.error(chalk.red('exec add ')+error)
            return
        }
        console.log(chalk.yellow('seccess:')+chalk.blue(`add ${file}`))
        exec(`git commit -m "${argv.m}"`,(error)=>{
            if(error){
                console.error(chalk.red('exec commit ')+error)
                return
            }
            console.log(chalk.yellow('seccess:')+chalk.blue(`commit "${argv.m}"`))
            exec('git pull',(error,stdout)=>{
                if(error){
                    console.error(chalk.red('exec pull ' )+error)
                    return
                }
                console.log(chalk.yellow('seccess:')+chalk.blue(`pull`))
                exec('git push',(error,stdout)=>{
                    if(error){
                        console.error(chalk.red('exec push ')+error)
                        return
                    }
                    console.log(chalk.yellow('seccess:')+chalk.blue(`push`))
                })
            })
        })
    })
}