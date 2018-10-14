using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NeuralPathways.Models;
using NeuralPathways.Service.Abstract;

namespace NeuralPathways.Controllers
{
    [Route("api/User")]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("create")]
        public async Task<IActionResult> UserProfileCreateAsync([FromBody] User user)
        {
            return Ok(await _userService.UserProfileCreateAsync(user));
        }

        [HttpGet("getByEmail")]
        public async Task<IActionResult> GetUserByEmailAsync([FromQuery] string email)
        {
            return Ok(await _userService.GetUserByEmailAsync(email));
        }

        [HttpGet("getById")]
        public async Task<IActionResult> GetUserByIdAsynce([FromQuery] string id)
        {
            return Ok(await _userService.GetUserByIdAsync(id));
        }

        [HttpPost("update")]
        public async Task<IActionResult> UserProfileUpdateAsync([FromBody] User user)
        {
            return Ok(await _userService.UserProfileUpdateAsync(user));
        }

        [HttpPost("delete")]
        public async Task<IActionResult> UserProfileDeleteByEmailAsync([FromBody] string email)
        {
            return Ok(_userService.UserProfileDeleteByEmailAsync(email));
        }

        [HttpPost("login")]
        public async Task<IActionResult> UserLoginAsync([FromBody] User user)
        {
            var result = await _userService.UserLoginAsync(user);

            if (string.IsNullOrEmpty(result.Id) || user.Password != result.Password)
            {
                return BadRequest("Invalid Login");
            }

            return Ok(result);
        }
    }
}